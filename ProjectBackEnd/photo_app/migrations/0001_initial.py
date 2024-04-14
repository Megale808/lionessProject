# Generated by Django 5.0.3 on 2024-04-14 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PhotoPackage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('package_name', models.CharField(choices=[('Basic', 'Basic'), ('Standard', 'Standard'), ('Premium', 'Premium')], default='Basic', max_length=50)),
                ('package_info', models.TextField(default='', null=True)),
                ('package_price', models.DecimalField(decimal_places=2, default=0.0, max_digits=5)),
            ],
        ),
    ]
