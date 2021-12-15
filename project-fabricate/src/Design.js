import React, { Component } from "react";
import './Design.css';
import { Button } from '@material-ui/core'

// import * as tf from '@tensorflow/tfjs';

function Design (props) {
    
//   // const model = async () => {
//   //   const x = await tf.loadLayersModel(process.env.PUBLIC_URL + 'model_converted/model.json');
//   //   return x;
//   // }
const onDownload = () => {
    const link = document.createElement("a");
    link.download = `download.txt`;
    link.href = "./download.txt";
    link.click();
  };
    return (
        <div>
            <h2> Design Generator</h2>
            <div className="BoundingBox">
                <img id="final" width="400" height="400" src={props.m_file}/>
            </div>
            <div className="btn">
            <Button onClick={onDownload} variant="contained" >
                Download
            </Button>
            </div>
        </div>

    );
    
}

export default Design;