ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:6933").setExtent([9335380.686456, -35435.845581, 10786362.191103, 974683.620065]);
var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_chao1_residualised_env_only_guard_full_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'chao1_residualised_env_only_guard_full<br />\
    <img src="styles/legend/chao1_residualised_env_only_guard_full_1_0.png" /> 98.1018<br />\
    <img src="styles/legend/chao1_residualised_env_only_guard_full_1_1.png" /> 169.9793<br />\
    <img src="styles/legend/chao1_residualised_env_only_guard_full_1_2.png" /> 241.8569<br />\
    <img src="styles/legend/chao1_residualised_env_only_guard_full_1_3.png" /> 313.7344<br />\
    <img src="styles/legend/chao1_residualised_env_only_guard_full_1_4.png" /> 385.6119<br />\
    <img src="styles/legend/chao1_residualised_env_only_guard_full_1_5.png" /> 457.4894<br />\
    <img src="styles/legend/chao1_residualised_env_only_guard_full_1_6.png" /> 529.3669<br />\
    <img src="styles/legend/chao1_residualised_env_only_guard_full_1_7.png" /> 595.7154<br />\
    <img src="styles/legend/chao1_residualised_env_only_guard_full_1_8.png" /> 651.0058<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/chao1_residualised_env_only_guard_full_1.png",
            attributions: ' ',
            projection: 'EPSG:6933',
            alwaysInRange: true,
            imageExtent: [9613000.000000, 108000.000000, 11508000.000000, 940000.000000]
        })
    });

        var lyr_ESRITransportation_2 = new ol.layer.Tile({
            'title': 'ESRI Transportation',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIBoundariesPlaces_3 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });

lyr_ESRIGraydark_0.setVisible(true);lyr_chao1_residualised_env_only_guard_full_1.setVisible(true);lyr_ESRITransportation_2.setVisible(true);lyr_ESRIBoundariesPlaces_3.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_chao1_residualised_env_only_guard_full_1,lyr_ESRITransportation_2,lyr_ESRIBoundariesPlaces_3];
