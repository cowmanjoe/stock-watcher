import datetime
import pytz
from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response

from api.app.models import Seller, InventoryReport, Product
from api.app.serializers import SellerSerializer, InventoryReportSerializer
from rest_framework import generics


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

        if product is None:
            return Seller.objects.all()

        inventory_report = InventoryReport.objects.filter(product__name__contains=product).exclude(level="OUT_OF_STOCK")

        for i_r in inventory_report:
            seller_ids.append(i_r.seller.id)

        queryset = Seller.objects.filter(id__in=seller_ids)

        return queryset
