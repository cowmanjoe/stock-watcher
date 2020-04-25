import datetime

from rest_framework import viewsets
from rest_framework.response import Response

from api.app.models import Seller, InventoryReport, Product
from api.app.serializers import SellerSerializer, InventoryReportSerializer
from django.shortcuts import get_object_or_404


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

        report = InventoryReport(timestamp=datetime.datetime.now(), product=product, seller=seller, level=request.data["level"])
        report.save()

        serializer = InventoryReportSerializer(report)
        return Response(serializer.data)



