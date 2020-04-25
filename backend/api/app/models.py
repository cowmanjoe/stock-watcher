from django.db import models


class Seller(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    stock_levels = models.CharField(max_length=20)
