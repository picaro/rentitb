$(document).ready(function(){
	//set your google maps parameters
	var latitude = 32.0598036,
		longitude = 34.7705879,
		map_zoom = 17;

	//google map custom marker icon - .png fallback for IE11
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var marker_url = 'img/cd-icon-location.png';
	var destination_marker = 'img/cd-icon-destination.png'
		
	//define the basic color of your map, plus a value for saturation and brightness
	var	main_color = '#2d313f',
		saturation_value= -20,
		brightness_value= 5;

	//we define here the style of the map
	var style= [ 
		// {
		// 	//set saturation for the labels on the map
		// 	elementType: "labels",
		// 	stylers: [
		// 		{saturation: saturation_value}
		// 	]
		// },  
	    {	//poi stands for point of interest - don't show these lables on the map 
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show highways lables on the map
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    }, 
		{ 	
			//don't show local road lables on the map
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"} 
			] 
		},
		{ 
			//don't show arterial road lables on the map
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"}
			] 
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		}, 
		//style different elements on the map
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
			
		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}
	];
		
	//set google map options
	var map_options = {
      	center: new google.maps.LatLng(32.061672, 34.770277),
      	zoom: 16,
      	panControl: false,
      	zoomControl: false,
      	mapTypeControl: false,
      	streetViewControl: false,
      	mapTypeId: google.maps.MapTypeId.ROADMAP,
      	scrollwheel: false,
      	styles: style,
    }
    //inizialize the map
	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
	//add a custom marker to the map				
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng(latitude, 34.770813),
	    map: map,
	    visible: true,
	 	icon: marker_url,
	});
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(32.061127, 34.770320),
		map: map,
		visible: true,
		icon: destination_marker,
	});
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(32.059635, 34.767423),
		map: map,
		visible: true,
		icon: destination_marker,
	});
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(32.058926, 34.771822),
		map: map,
		visible: true,
		icon: destination_marker,
	});
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(32.059408, 34.773646),
		map: map,
		visible: true,
		icon: destination_marker,
	});
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(32.060608, 34.773935),
		map: map,
		visible: true,
		icon: destination_marker,
	});
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(32.060658, 34.760878),
		map: map,
		visible: true,
		icon: destination_marker,
	});
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(32.061595, 34.764590),
		map: map,
		visible: true,
		icon: destination_marker,
	});

	//add custom buttons for the zoom-in/zoom-out on the map
	// function CustomZoomControl(controlDiv, map) {
	// 	//grap the zoom elements from the DOM and insert them in the map 
	//   	var controlUIzoomIn= document.getElementById('cd-zoom-in'),
	//   		controlUIzoomOut= document.getElementById('cd-zoom-out');
	//   	controlDiv.appendChild(controlUIzoomIn);
	//   	controlDiv.appendChild(controlUIzoomOut);

	// 	// Setup the click event listeners and zoom-in or out according to the clicked element
	// 	google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
	// 	    map.setZoom(map.getZoom()+1)
	// 	});
	// 	google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
	// 	    map.setZoom(map.getZoom()-1)
	// 	});
	// }

	// var zoomControlDiv = document.createElement('div');
 // 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

  	// //insert the zoom div on the top left of the map
  	// map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
});

  