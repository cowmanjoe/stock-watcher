# Generated by Django 3.0.5 on 2020-04-25 09:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20200424_2244'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('name', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('product_type', models.CharField(max_length=100)),
            ],
        ),
        migrations.RemoveField(
            model_name='seller',
            name='stock_levels',
        ),
        migrations.CreateModel(
            name='InventoryReport',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField()),
                ('level', models.CharField(max_length=20)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Product')),
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='inventory_reports', to='app.Seller')),
            ],
        ),
    ]
