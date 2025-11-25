var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Estaciones_SENAMHIestacion_meteorologica_1 = new ol.format.GeoJSON();
var features_Estaciones_SENAMHIestacion_meteorologica_1 = format_Estaciones_SENAMHIestacion_meteorologica_1.readFeatures(json_Estaciones_SENAMHIestacion_meteorologica_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_SENAMHIestacion_meteorologica_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_SENAMHIestacion_meteorologica_1.addFeatures(features_Estaciones_SENAMHIestacion_meteorologica_1);
cluster_Estaciones_SENAMHIestacion_meteorologica_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Estaciones_SENAMHIestacion_meteorologica_1
});
var lyr_Estaciones_SENAMHIestacion_meteorologica_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Estaciones_SENAMHIestacion_meteorologica_1, 
                style: style_Estaciones_SENAMHIestacion_meteorologica_1,
                popuplayertitle: 'Estaciones_SENAMHI — estacion_meteorologica',
                interactive: true,
                title: '<img src="styles/legend/Estaciones_SENAMHIestacion_meteorologica_1.png" /> Estaciones_SENAMHI — estacion_meteorologica'
            });
var format_Departamentos_boliviadepartamentos_geo_2 = new ol.format.GeoJSON();
var features_Departamentos_boliviadepartamentos_geo_2 = format_Departamentos_boliviadepartamentos_geo_2.readFeatures(json_Departamentos_boliviadepartamentos_geo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_boliviadepartamentos_geo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_boliviadepartamentos_geo_2.addFeatures(features_Departamentos_boliviadepartamentos_geo_2);
var lyr_Departamentos_boliviadepartamentos_geo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_boliviadepartamentos_geo_2, 
                style: style_Departamentos_boliviadepartamentos_geo_2,
                popuplayertitle: 'Departamentos_bolivia — departamentos_geo',
                interactive: true,
                title: '<img src="styles/legend/Departamentos_boliviadepartamentos_geo_2.png" /> Departamentos_bolivia — departamentos_geo'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Estaciones_SENAMHIestacion_meteorologica_1.setVisible(true);lyr_Departamentos_boliviadepartamentos_geo_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Estaciones_SENAMHIestacion_meteorologica_1,lyr_Departamentos_boliviadepartamentos_geo_2];
lyr_Estaciones_SENAMHIestacion_meteorologica_1.set('fieldAliases', {'fid': 'fid', 'estacion': 'estacion', 'latitud': 'latitud', 'longitud': 'longitud', 'altura': 'altura', 'activo': 'activo', 'orden': 'orden', 'fecha_inic': 'fecha_inic', 'cod_omm': 'cod_omm', 'cod_oaci': 'cod_oaci', 'cod_otro': 'cod_otro', 'propietari': 'propietari', 'telefono': 'telefono', 'direccion': 'direccion', 'correo': 'correo', 'web': 'web', 'observacio': 'observacio', 'clasificac': 'clasificac', 'operador': 'operador', 'financiado': 'financiado', 'nom_dep': 'nom_dep', 'nom_mun': 'nom_mun', 'nom_prov': 'nom_prov', 'categoria': 'categoria', 'tipo_estac': 'tipo_estac', 'nombre_obs': 'nombre_obs', 'ci_obs': 'ci_obs', 'estado': 'estado', 'pronostico': 'pronostico', });
lyr_Departamentos_boliviadepartamentos_geo_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'c_ut': 'c_ut', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_Estaciones_SENAMHIestacion_meteorologica_1.set('fieldImages', {'fid': '', 'estacion': '', 'latitud': '', 'longitud': '', 'altura': '', 'activo': '', 'orden': '', 'fecha_inic': '', 'cod_omm': '', 'cod_oaci': '', 'cod_otro': '', 'propietari': '', 'telefono': '', 'direccion': '', 'correo': '', 'web': '', 'observacio': '', 'clasificac': '', 'operador': '', 'financiado': '', 'nom_dep': '', 'nom_mun': '', 'nom_prov': '', 'categoria': '', 'tipo_estac': '', 'nombre_obs': '', 'ci_obs': '', 'estado': '', 'pronostico': '', });
lyr_Departamentos_boliviadepartamentos_geo_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'c_ut': 'TextEdit', 'DEPARTAMEN': 'TextEdit', });
lyr_Estaciones_SENAMHIestacion_meteorologica_1.set('fieldLabels', {'fid': 'hidden field', 'estacion': 'inline label - always visible', 'latitud': 'inline label - visible with data', 'longitud': 'inline label - always visible', 'altura': 'inline label - always visible', 'activo': 'hidden field', 'orden': 'hidden field', 'fecha_inic': 'hidden field', 'cod_omm': 'hidden field', 'cod_oaci': 'hidden field', 'cod_otro': 'hidden field', 'propietari': 'header label - always visible', 'telefono': 'hidden field', 'direccion': 'hidden field', 'correo': 'hidden field', 'web': 'hidden field', 'observacio': 'hidden field', 'clasificac': 'hidden field', 'operador': 'hidden field', 'financiado': 'hidden field', 'nom_dep': 'inline label - always visible', 'nom_mun': 'hidden field', 'nom_prov': 'hidden field', 'categoria': 'hidden field', 'tipo_estac': 'hidden field', 'nombre_obs': 'hidden field', 'ci_obs': 'hidden field', 'estado': 'hidden field', 'pronostico': 'hidden field', });
lyr_Departamentos_boliviadepartamentos_geo_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'c_ut': 'hidden field', 'DEPARTAMEN': 'hidden field', });
lyr_Departamentos_boliviadepartamentos_geo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});