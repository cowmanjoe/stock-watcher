from django.db import models


class Seller(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    product_type = models.CharField(max_length=100)


class InventoryReport(models.Model):
    timestamp = models.DateTimeField()
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    seller = models.ForeignKey('Seller', on_delete=models.CASCADE, related_name='inventory_reports')
    level = models.CharField(max_length=20)
