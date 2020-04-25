from django.db import models


PRODUCT_TYPE_CHOICES = [
    ('TOILET_PAPER', 'Toilet Paper'),
    ('BREAD', 'Bread'),
    ('PAINKILLERS', 'Painkillers'),
]

class Seller(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=100, null=True)
    latitude = models.FloatField(null=True)
    longitude = models.FloatField(null=True)


class Product(models.Model):
    name = models.CharField(max_length=100, primary_key=True)
    product_type = models.CharField(max_length=100, choices=PRODUCT_TYPE_CHOICES)


class InventoryReport(models.Model):
    timestamp = models.DateTimeField()
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    seller = models.ForeignKey('Seller', on_delete=models.CASCADE, related_name='inventory_reports')
    level = models.CharField(max_length=20)
