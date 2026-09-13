import React, { useState, useEffect } from 'react';
import './dropdown.css';

export default function dropdown() {
    return(
        <details>
            <summary>How it works?</summary>
            <p>
                add users name, job and salary and click on the add button to add on the list.
                <details>
                    <summary>More info</summary>
                    <p>if you having a problem, please contact support. ╰(*°▽°*)╯ 
                        <a href="https://nkogallardo.link/contact" target="_blank" rel="noopener noreferrer">Contact Support</a>
                    </p>
                    <p>if you want to know more about the creator, <a href="https://nkogallardo.link/#about" target="_blank" rel="noopener noreferrer">click here</a></p>
                </details>
            </p>    
        </details>
    );
}