# Generated by Django 3.0.5 on 2020-04-25 10:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20200425_0328'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='seller',
            name='location',
        ),
    ]
