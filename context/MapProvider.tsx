'use client';

import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';

const libraries = ['places', 'drawing', 'geometry'];

export default function MapProvider ({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
    libraries: libraries as Libraries,
  });

  if (loadError) return <div className='h-full flex-center text-center'>Encountered error while loading Google Maps. <br/> {loadError.message}</div>
  if(!scriptLoaded) return <div className='h-full flex-center text-center'>Map is loading...</div>

  return children;
}