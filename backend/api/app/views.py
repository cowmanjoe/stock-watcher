import datetime
import pytz
from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response

from api.app.models import Seller, InventoryReport, Product
from api.app.serializers import SellerSerializer, InventoryReportSerializer
from rest_framework import generics

from django.db.models import F


class SellerViewSet(viewsets.ModelViewSet):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer


class InventoryReportViewSet(viewsets.ViewSet):

    def create(self, request):
        seller = get_object_or_404(Seller.objects.all(), id=request.data["seller_id"])
        product, created = Product.objects.get_or_create(name=request.data["product_name"])

        if created:
            product.product_type = request.data["product_type"]
            product.save()

        report = InventoryReport(timestamp=datetime.datetime.now(tz=pytz.UTC), product=product, seller=seller, level=request.data["level"])
        report.save()

        serializer = InventoryReportSerializer(report)
        return Response(serializer.data)


class SellerList(generics.ListAPIView):
    serializer_class = SellerSerializer

    def get_queryset(self):

        seller_ids = []

        product = self.request.query_params.get('product', None)

        tempLatitude = (self.request.query_params.get('lat', None))
        tempLongitude = (self.request.query_params.get('long', None))
       
        # orderBy = self.request.query_params.get('orderBy', None)

        if product is None:
            return Seller.objects.all().order_by('name')

        if  tempLongitude is None or tempLatitude is None:
            inventory_report_name = InventoryReport.objects.filter(product__name__contains=product).\
            exclude(level="OUT_OF_STOCK")

            inventory_report_type = InventoryReport.objects.filter(product__product_type__contains=product).\
            exclude(level="OUT_OF_STOCK")
        
            for i_r_n in inventory_report_name:
                i_r_n.seller.inventory_reports.filter(product__name=product)
                seller_ids.append(i_r_n.seller.id)

            for i_r_t in inventory_report_type:
                i_r_t.seller.inventory_reports.filter(product__product_type=product)
                seller_ids.append(i_r_t.seller.id)


            queryset = Seller.objects.filter(id__in=seller_ids).order_by('name')
            return queryset
        
        latitude = float(tempLatitude)
        longitude = float(tempLongitude)

        Seller_distance = Seller.objects.annotate(ordering=(F('latitude') - latitude) *  (F('latitude') - latitude)
         + (F('longitude') - longitude) *  (F('longitude') - longitude)).order_by('ordering')
        
        return  Seller_distance
