
// import React, {useState} from 'react';

// export default function Galaxy({data}) {
// 	const gameInfo = data.User[0].Group.Games[0]
// 	const encoded_labels = encodeURIComponent(gameInfo.hsLabels);
// 	const [imageurl, setImageUrl] = useState("https://c.files.bbci.co.uk/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg");
// 	var urlstring = `/map?tiles=${gameInfo.mapString}&hslabels=${encoded_labels}`
// 	var localUrl;
// 	if (imageurl.search('localhost') === -1){
// 		fetch(urlstring,{
// 		headers: {
// 			'Access-Control-Allow-Origin': 'https://ti4-card-images.appspot.com',
// 			'Origin': 'https://ti4-card-images.appspot.com',
// 			'Access-Control-Allow-Headers': 'X-Requested-With'
// 		},
// 		method: 'GET',
// 		mode: 'cors'
// 	})
// 		.then(response => response.blob())
// 		.then(image => {
// 			localUrl = URL.createObjectURL(image);
// 			setImageUrl(localUrl);

// 		})


// 	}

	

// 		return(
//    <div>
//       <img src={imageurl} id="galaxyimg" max-width="100%" alt="galaxy"/>
//    </div>
// )
// 	}