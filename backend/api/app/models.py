from django.db import models


INVENTORY_LEVEL_CHOICES = [
    ('OUT_OF_STOCK', 'Out of stock'),
    ('LOW', 'Low'),
    ('MEDIUM', 'Medium'),
    ('HIGH', 'High'),
]


class Seller(models.Model):
    objects = None
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=100, null=True)
    latitude = models.FloatField(null=True)
    longitude = models.FloatField(null=True)


class Product(models.Model):
    name = models.CharField(max_length=100, primary_key=True)
    product_type = models.CharField(max_length=100)


class InventoryReport(models.Model):
    timestamp = models.DateTimeField()
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    seller = models.ForeignKey('Seller', on_delete=models.CASCADE, related_name='inventory_reports')
    level = models.CharField(max_length=20, choices=INVENTORY_LEVEL_CHOICES)
