from rest_framework import serializers
from django.contrib.gis.geos import GEOSGeometry, Point


class PointsSerializer(serializers.Serializer):
    start_point_lat = serializers.FloatField()
    start_point_lng = serializers.FloatField()
    end_point_lat = serializers.FloatField()
    end_point_lng = serializers.FloatField()
    distance = serializers.SerializerMethodField()

    def get_distance(self, obj):
        start_point = Point(obj['start_point_lat'], obj['start_point_lng'])
        end_point = Point(obj['end_point_lat'], obj['end_point_lng'])
        distance_in_km = start_point.distance(end_point) * 100
        return f'{distance_in_km:.2f} km'
