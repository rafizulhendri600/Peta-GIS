var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_WILAYAHKABUPATEN_1 = new ol.format.GeoJSON();
var features_WILAYAHKABUPATEN_1 = format_WILAYAHKABUPATEN_1.readFeatures(json_WILAYAHKABUPATEN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WILAYAHKABUPATEN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WILAYAHKABUPATEN_1.addFeatures(features_WILAYAHKABUPATEN_1);
var lyr_WILAYAHKABUPATEN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WILAYAHKABUPATEN_1, 
                style: style_WILAYAHKABUPATEN_1,
                popuplayertitle: 'WILAYAH KABUPATEN',
                interactive: true,
    title: 'WILAYAH KABUPATEN<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_0.png" /> Agam<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_1.png" /> Dharmasraya<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_2.png" /> Kepulauan Mentawai<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_3.png" /> Kota Bukittinggi<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_4.png" /> Kota Padang<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_5.png" /> Kota Padang Panjang<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_6.png" /> Kota Pariaman<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_7.png" /> Kota Payakumbuh<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_8.png" /> Kota Sawahlunto<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_9.png" /> Kota Solok<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_10.png" /> Lima Puluh Kota<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_11.png" /> Padang Pariaman<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_12.png" /> Pasaman<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_13.png" /> Pasaman Barat<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_14.png" /> Pesisir Selatan<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_15.png" /> Sijunjung<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_16.png" /> Solok<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_17.png" /> Solok Selatan<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_18.png" /> Tanah Datar<br />\
    <img src="styles/legend/WILAYAHKABUPATEN_1_19.png" /> <br />' });
var format_ZONA42050KM_2 = new ol.format.GeoJSON();
var features_ZONA42050KM_2 = format_ZONA42050KM_2.readFeatures(json_ZONA42050KM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA42050KM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA42050KM_2.addFeatures(features_ZONA42050KM_2);
var lyr_ZONA42050KM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONA42050KM_2, 
                style: style_ZONA42050KM_2,
                popuplayertitle: 'ZONA 4 [20 - 50 KM]',
                interactive: false,
                title: '<img src="styles/legend/ZONA42050KM_2.png" /> ZONA 4 [20 - 50 KM]'
            });
var format_ZONA31020KM_3 = new ol.format.GeoJSON();
var features_ZONA31020KM_3 = format_ZONA31020KM_3.readFeatures(json_ZONA31020KM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA31020KM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA31020KM_3.addFeatures(features_ZONA31020KM_3);
var lyr_ZONA31020KM_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONA31020KM_3, 
                style: style_ZONA31020KM_3,
                popuplayertitle: 'ZONA 3 [10 - 20KM]',
                interactive: false,
                title: '<img src="styles/legend/ZONA31020KM_3.png" /> ZONA 3 [10 - 20KM]'
            });
var format_ZONA2510KM_4 = new ol.format.GeoJSON();
var features_ZONA2510KM_4 = format_ZONA2510KM_4.readFeatures(json_ZONA2510KM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA2510KM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA2510KM_4.addFeatures(features_ZONA2510KM_4);
var lyr_ZONA2510KM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONA2510KM_4, 
                style: style_ZONA2510KM_4,
                popuplayertitle: 'ZONA 2 [5 - 10KM]',
                interactive: false,
                title: '<img src="styles/legend/ZONA2510KM_4.png" /> ZONA 2 [5 - 10KM]'
            });
var format_ZONA105KM_5 = new ol.format.GeoJSON();
var features_ZONA105KM_5 = format_ZONA105KM_5.readFeatures(json_ZONA105KM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONA105KM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONA105KM_5.addFeatures(features_ZONA105KM_5);
var lyr_ZONA105KM_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONA105KM_5, 
                style: style_ZONA105KM_5,
                popuplayertitle: 'ZONA 1 [0 - 5KM]',
                interactive: false,
                title: '<img src="styles/legend/ZONA105KM_5.png" /> ZONA 1 [0 - 5KM]'
            });
var format_TitikTerdampakErupsiMarapi_6 = new ol.format.GeoJSON();
var features_TitikTerdampakErupsiMarapi_6 = format_TitikTerdampakErupsiMarapi_6.readFeatures(json_TitikTerdampakErupsiMarapi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTerdampakErupsiMarapi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTerdampakErupsiMarapi_6.addFeatures(features_TitikTerdampakErupsiMarapi_6);
var lyr_TitikTerdampakErupsiMarapi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikTerdampakErupsiMarapi_6, 
                style: style_TitikTerdampakErupsiMarapi_6,
                popuplayertitle: 'Titik Terdampak Erupsi Marapi',
                interactive: true,
                title: '<img src="styles/legend/TitikTerdampakErupsiMarapi_6.png" /> Titik Terdampak Erupsi Marapi'
            });
var format_marapi_7 = new ol.format.GeoJSON();
var features_marapi_7 = format_marapi_7.readFeatures(json_marapi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_marapi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_marapi_7.addFeatures(features_marapi_7);
var lyr_marapi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_marapi_7, 
                style: style_marapi_7,
                popuplayertitle: 'marapi',
                interactive: true,
                title: '<img src="styles/legend/marapi_7.png" /> marapi'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_WILAYAHKABUPATEN_1.setVisible(true);lyr_ZONA42050KM_2.setVisible(true);lyr_ZONA31020KM_3.setVisible(true);lyr_ZONA2510KM_4.setVisible(true);lyr_ZONA105KM_5.setVisible(true);lyr_TitikTerdampakErupsiMarapi_6.setVisible(true);lyr_marapi_7.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_WILAYAHKABUPATEN_1,lyr_ZONA42050KM_2,lyr_ZONA31020KM_3,lyr_ZONA2510KM_4,lyr_ZONA105KM_5,lyr_TitikTerdampakErupsiMarapi_6,lyr_marapi_7];
lyr_WILAYAHKABUPATEN_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Lokasi': 'Lokasi', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_ZONA42050KM_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'radius_km': 'radius_km', 'lon': 'lon', 'lat': 'lat', 'tingkat_te': 'tingkat_te', 'wilayah_te': 'wilayah_te', });
lyr_ZONA31020KM_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'radius_km': 'radius_km', 'lon': 'lon', 'lat': 'lat', 'tingkat_te': 'tingkat_te', 'wilayah_te': 'wilayah_te', });
lyr_ZONA2510KM_4.set('fieldAliases', {'id': 'id', 'name': 'name', 'radius_km': 'radius_km', 'lon': 'lon', 'lat': 'lat', 'tingkat_te': 'tingkat_te', 'wilayah_te': 'wilayah_te', });
lyr_ZONA105KM_5.set('fieldAliases', {'id': 'id', 'name': 'name', 'radius_km': 'radius_km', 'lon': 'lon', 'lat': 'lat', 'tingkat_te': 'tingkat_te', 'wilayah_te': 'wilayah_te', });
lyr_TitikTerdampakErupsiMarapi_6.set('fieldAliases', {'Nama': 'Nama', 'Kab_Kota': 'Kab_Kota', 'Radius': 'Radius', 'Lat': 'Lat', 'Lon': 'Lon', 'tingkat_te': 'tingkat_te', });
lyr_marapi_7.set('fieldAliases', {'name': 'name', });
lyr_WILAYAHKABUPATEN_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Lokasi': '', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'Desa': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_ZONA42050KM_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'radius_km': 'TextEdit', 'lon': 'TextEdit', 'lat': 'TextEdit', 'tingkat_te': '', 'wilayah_te': '', });
lyr_ZONA31020KM_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'radius_km': 'TextEdit', 'lon': 'TextEdit', 'lat': 'TextEdit', 'tingkat_te': '', 'wilayah_te': '', });
lyr_ZONA2510KM_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'radius_km': 'TextEdit', 'lon': 'TextEdit', 'lat': 'TextEdit', 'tingkat_te': '', 'wilayah_te': '', });
lyr_ZONA105KM_5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'radius_km': 'TextEdit', 'lon': 'TextEdit', 'lat': 'TextEdit', 'tingkat_te': '', 'wilayah_te': '', });
lyr_TitikTerdampakErupsiMarapi_6.set('fieldImages', {'Nama': 'TextEdit', 'Kab_Kota': 'TextEdit', 'Radius': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'tingkat_te': '', });
lyr_marapi_7.set('fieldImages', {'name': 'TextEdit', });
lyr_WILAYAHKABUPATEN_1.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Lokasi': 'inline label - always visible', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'Desa': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'LUAS': 'inline label - always visible', });
lyr_ZONA42050KM_2.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', 'radius_km': 'inline label - visible with data', 'lon': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'tingkat_te': 'inline label - always visible', 'wilayah_te': 'inline label - always visible', });
lyr_ZONA31020KM_3.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', 'radius_km': 'inline label - visible with data', 'lon': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'tingkat_te': 'inline label - always visible', 'wilayah_te': 'inline label - always visible', });
lyr_ZONA2510KM_4.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', 'radius_km': 'inline label - visible with data', 'lon': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'tingkat_te': 'inline label - always visible', 'wilayah_te': 'inline label - always visible', });
lyr_ZONA105KM_5.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - visible with data', 'radius_km': 'inline label - visible with data', 'lon': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'tingkat_te': 'inline label - visible with data', 'wilayah_te': 'inline label - visible with data', });
lyr_TitikTerdampakErupsiMarapi_6.set('fieldLabels', {'Nama': 'header label - visible with data', 'Kab_Kota': 'hidden field', 'Radius': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lon': 'inline label - visible with data', 'tingkat_te': 'inline label - visible with data', });
lyr_marapi_7.set('fieldLabels', {'name': 'inline label - visible with data', });
lyr_marapi_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});