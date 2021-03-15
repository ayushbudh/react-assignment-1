import React from 'react';

const userOutput = (props) =>{
    return(
        <div>
            <p>Username: {props.name}    Hello, with that spelling, was used in publications in the US as early as the 18 October 1826 edition of the Norwich Courier of Norwich, Connecticut.[1] Another early use was an 1833 American book called The Sketches and Eccentricities of Col. David Crockett, of West Tennessee,[2] which was reprinted that same year in The London Literary Gazette.[3] The word was extensively used in literature by the 1860s.[4] </p>
            <p>The Old English verb, hǽlan (1. wv/t1b 1 to heal, cure, save; greet, salute; gehǽl! Hosanna!), may be the ultimate origin of the word.[28] Hǽlan is likely a cognate of German Heil (meaning complete for things and healthy for beings) and other similar words of Germanic origin. Bill Bryson asserts in his book Mother Tongue that "hello" comes from Old English hál béo þu ("Hale be thou", or "whole be thou", meaning a wish for good health; cf. "goodbye" which is a contraction of "God be with ye").
             UserName: {props.children}
 </p>
        </div>
    );
}

export default userOutput;