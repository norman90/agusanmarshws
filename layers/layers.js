var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_BrgywithinAMWS_1 = new ol.format.GeoJSON();
var features_BrgywithinAMWS_1 = format_BrgywithinAMWS_1.readFeatures(json_BrgywithinAMWS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BrgywithinAMWS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrgywithinAMWS_1.addFeatures(features_BrgywithinAMWS_1);
var lyr_BrgywithinAMWS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BrgywithinAMWS_1, 
                style: style_BrgywithinAMWS_1,
                interactive: true,
                title: '<img src="styles/legend/BrgywithinAMWS_1.png" /> Brgy within AMWS '
            });
var format_RiversCreeks_2 = new ol.format.GeoJSON();
var features_RiversCreeks_2 = format_RiversCreeks_2.readFeatures(json_RiversCreeks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiversCreeks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiversCreeks_2.addFeatures(features_RiversCreeks_2);
var lyr_RiversCreeks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RiversCreeks_2, 
                style: style_RiversCreeks_2,
                interactive: true,
                title: '<img src="styles/legend/RiversCreeks_2.png" /> Rivers & Creeks'
            });
var format_AgusanRiver_3 = new ol.format.GeoJSON();
var features_AgusanRiver_3 = format_AgusanRiver_3.readFeatures(json_AgusanRiver_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgusanRiver_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgusanRiver_3.addFeatures(features_AgusanRiver_3);
var lyr_AgusanRiver_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgusanRiver_3, 
                style: style_AgusanRiver_3,
                interactive: true,
                title: '<img src="styles/legend/AgusanRiver_3.png" /> Agusan River'
            });
var format_AMWSENIPAS_4 = new ol.format.GeoJSON();
var features_AMWSENIPAS_4 = format_AMWSENIPAS_4.readFeatures(json_AMWSENIPAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMWSENIPAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMWSENIPAS_4.addFeatures(features_AMWSENIPAS_4);
var lyr_AMWSENIPAS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AMWSENIPAS_4, 
                style: style_AMWSENIPAS_4,
                interactive: true,
                title: '<img src="styles/legend/AMWSENIPAS_4.png" /> AMWS ENIPAS'
            });
var format_Geotag_5 = new ol.format.GeoJSON();
var features_Geotag_5 = format_Geotag_5.readFeatures(json_Geotag_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geotag_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geotag_5.addFeatures(features_Geotag_5);
var lyr_Geotag_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geotag_5, 
                style: style_Geotag_5,
                interactive: true,
                title: '<img src="styles/legend/Geotag_5.png" /> Geotag'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_BrgywithinAMWS_1.setVisible(true);lyr_RiversCreeks_2.setVisible(true);lyr_AgusanRiver_3.setVisible(true);lyr_AMWSENIPAS_4.setVisible(true);lyr_Geotag_5.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_BrgywithinAMWS_1,lyr_RiversCreeks_2,lyr_AgusanRiver_3,lyr_AMWSENIPAS_4,lyr_Geotag_5];
lyr_BrgywithinAMWS_1.set('fieldAliases', {'ID_NO_': 'ID_NO_', 'BRGY_NAME_': 'BRGY_NAME_', 'CITY_MUNI_': 'CITY_MUNI_', 'POP_2007': 'POP_2007', 'HH_CBMS09': 'HH_CBMS09', 'PI_2005': 'PI_2005', 'PI_2009': 'PI_2009', 'RANGE': 'RANGE', 'PROVINCE_': 'PROVINCE_', 'AREA_HA_': 'AREA_HA_', 'AREA': 'AREA', 'DISTRICT': 'DISTRICT', 'Status': 'Status', });
lyr_RiversCreeks_2.set('fieldAliases', {'NAME': 'NAME', 'DESCRIPTIO': 'DESCRIPTIO', });
lyr_AgusanRiver_3.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Descriptio': 'Descriptio', 'TypeI': 'TypeI', 'BranchesI': 'BranchesI', 'Coordinate': 'Coordinate', 'XI': 'XI', 'YI': 'YI', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'LatitudeI', 'LengthI': 'LengthI', 'AreaI': 'AreaI', 'BearingI': 'BearingI', 'SelectionM': 'SelectionM', 'SelectionI': 'SelectionI', 'VersionI': 'VersionI', });
lyr_AMWSENIPAS_4.set('fieldAliases', {'ID': 'ID', 'Column1': 'Column1', 'Column2': 'Column2', 'Column3': 'Column3', 'TypeI': 'TypeI', 'BranchesI': 'BranchesI', 'Coordinate': 'Coordinate', 'XI': 'XI', 'YI': 'YI', 'LongitudeI': 'LongitudeI', 'LatitudeI': 'LatitudeI', 'LengthI': 'LengthI', 'AreaI': 'AreaI', 'BearingI': 'BearingI', 'SelectionM': 'SelectionM', 'SelectionI': 'SelectionI', 'VersionI': 'VersionI', });
lyr_Geotag_5.set('fieldAliases', {'Name': 'Name', 'Folder': 'Folder', });
lyr_BrgywithinAMWS_1.set('fieldImages', {'ID_NO_': 'Range', 'BRGY_NAME_': 'TextEdit', 'CITY_MUNI_': 'TextEdit', 'POP_2007': 'TextEdit', 'HH_CBMS09': 'TextEdit', 'PI_2005': 'TextEdit', 'PI_2009': 'TextEdit', 'RANGE': 'TextEdit', 'PROVINCE_': 'TextEdit', 'AREA_HA_': 'TextEdit', 'AREA': 'TextEdit', 'DISTRICT': 'TextEdit', 'Status': 'TextEdit', });
lyr_RiversCreeks_2.set('fieldImages', {'NAME': 'TextEdit', 'DESCRIPTIO': 'TextEdit', });
lyr_AgusanRiver_3.set('fieldImages', {'ID': 'TextEdit', 'Name': 'TextEdit', 'Descriptio': 'TextEdit', 'TypeI': 'TextEdit', 'BranchesI': 'TextEdit', 'Coordinate': 'TextEdit', 'XI': 'TextEdit', 'YI': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'LengthI': 'TextEdit', 'AreaI': 'TextEdit', 'BearingI': 'TextEdit', 'SelectionM': 'TextEdit', 'SelectionI': 'TextEdit', 'VersionI': 'TextEdit', });
lyr_AMWSENIPAS_4.set('fieldImages', {'ID': 'TextEdit', 'Column1': 'TextEdit', 'Column2': 'TextEdit', 'Column3': 'TextEdit', 'TypeI': 'TextEdit', 'BranchesI': 'TextEdit', 'Coordinate': 'TextEdit', 'XI': 'TextEdit', 'YI': 'TextEdit', 'LongitudeI': 'TextEdit', 'LatitudeI': 'TextEdit', 'LengthI': 'TextEdit', 'AreaI': 'TextEdit', 'BearingI': 'TextEdit', 'SelectionM': 'TextEdit', 'SelectionI': 'TextEdit', 'VersionI': 'TextEdit', });
lyr_Geotag_5.set('fieldImages', {'Name': 'TextEdit', 'Folder': 'ExternalResource', });
lyr_BrgywithinAMWS_1.set('fieldLabels', {'ID_NO_': 'no label', 'BRGY_NAME_': 'no label', 'CITY_MUNI_': 'no label', 'POP_2007': 'no label', 'HH_CBMS09': 'no label', 'PI_2005': 'no label', 'PI_2009': 'no label', 'RANGE': 'no label', 'PROVINCE_': 'no label', 'AREA_HA_': 'no label', 'AREA': 'no label', 'DISTRICT': 'no label', 'Status': 'no label', });
lyr_RiversCreeks_2.set('fieldLabels', {'NAME': 'no label', 'DESCRIPTIO': 'no label', });
lyr_AgusanRiver_3.set('fieldLabels', {'ID': 'no label', 'Name': 'no label', 'Descriptio': 'no label', 'TypeI': 'no label', 'BranchesI': 'no label', 'Coordinate': 'no label', 'XI': 'no label', 'YI': 'no label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'LengthI': 'no label', 'AreaI': 'no label', 'BearingI': 'no label', 'SelectionM': 'no label', 'SelectionI': 'no label', 'VersionI': 'no label', });
lyr_AMWSENIPAS_4.set('fieldLabels', {'ID': 'no label', 'Column1': 'no label', 'Column2': 'no label', 'Column3': 'no label', 'TypeI': 'no label', 'BranchesI': 'no label', 'Coordinate': 'no label', 'XI': 'no label', 'YI': 'no label', 'LongitudeI': 'no label', 'LatitudeI': 'no label', 'LengthI': 'no label', 'AreaI': 'no label', 'BearingI': 'no label', 'SelectionM': 'no label', 'SelectionI': 'no label', 'VersionI': 'no label', });
lyr_Geotag_5.set('fieldLabels', {'Name': 'no label', 'Folder': 'no label', });
lyr_Geotag_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});