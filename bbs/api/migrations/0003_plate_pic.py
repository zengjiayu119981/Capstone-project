# Generated by Django 4.1 on 2024-04-13 18:04

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0002_managerinfo"),
    ]

    operations = [
        migrations.AddField(
            model_name="plate",
            name="pic",
            field=models.ImageField(
                null=True, upload_to="plate/pic/", verbose_name="图片"
            ),
        ),
    ]
