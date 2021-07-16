import type {Environment} from 'react-relay'
import styles from './styles/Home.module.css'
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
  useLazyLoadQuery,
  commitMutation
} from 'react-relay/hooks';
import graphql from 'babel-plugin-relay/macro';
import RelayEnvironment from './RelayEnvironment';
import React, {useState, Fragment, useEffect, Suspense} from 'react';



const GalaxyQuery = graphql`
  query GalaxyQuery {
  Game {
    mapString
    hsLabels
  }
}`;
const preloadedQuery = loadQuery(RelayEnvironment, GalaxyQuery, {

});

function GalaxyChild(props) {
	const [imageurl, setImageUrl] = useState("https://c.files.bbci.co.uk/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg");
	const data = usePreloadedQuery(GalaxyQuery, props.preloadedQuery);
	var urlstring = `/map?tiles=${data.Game[0].mapString}&hslabels=${data.Game[0].hsLabels}`
	fetch(urlstring,{
		headers: {
			'Access-Control-Allow-Origin': 'https://ti4-card-images.appspot.com',
			'Origin': 'https://ti4-card-images.appspot.com',
			'Access-Control-Allow-Headers': 'X-Requested-With'
		},
		method: 'GET',
		mode: 'cors'
	})
		.then(response => response.blob())
		.then(image => {
			const localUrl = URL.createObjectURL(image);
			setImageUrl(localUrl);
			console.log(localUrl)

		})

		return(
   <div class="galaxy">
      <img src={imageurl} id="galaxyimg" max-width="100%"/>
   </div>
)

	
}
export default function Galaxy(props){
  return (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <GalaxyChild preloadedQuery={preloadedQuery}/>
    </Suspense>
  </RelayEnvironmentProvider>
  );
}