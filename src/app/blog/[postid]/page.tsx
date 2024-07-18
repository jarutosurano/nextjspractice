import React from 'react';
import { Metadata } from 'next';

type Props = {
  params: {
    postid: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Blog Post ${params.postid}`
  };
};

export default function Page({ params }: Props) {
  return (
    <div>
      <h1>Details page with an ID: {params.postid}</h1>
    </div>
  );
}
