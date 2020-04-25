from rest_framework import serializers

from api.app.models import Seller, InventoryReport, Product


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'product_type']


class InventoryReportSerializer(serializers.HyperlinkedModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = InventoryReport
        fields = ['level', 'product', 'timestamp']


class SellerSerializer(serializers.HyperlinkedModelSerializer):
    inventory_reports = InventoryReportSerializer(many=True, read_only=True)

    class Meta:
        model = Seller
        fields = ['name', 'address', 'city', 'latitude', 'longitude', 'inventory_reports']
        depth = 3
