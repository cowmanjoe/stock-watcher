# Generated by Django 3.0.5 on 2020-04-26 10:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_auto_20200425_1626'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_type',
            field=models.CharField(max_length=100),
        ),
    ]
