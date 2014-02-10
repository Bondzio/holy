/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

//CKEDITOR.config.contentsLangDirection='ltr';

CKEDITOR.editorConfig = function( config ){
     
  // config.styleSet is an array of objects that define each style available
  // in the font styles tool in the ckeditor toolbar
  
    config.stylesSet =
  [
        /* Block Styles */

        // Each style is an object whose properties define how it is displayed
        // in the dropdown, as well as what it outputs as html into the editor
        // text area.
        { 
			name : 'list numbers'   , 
			element : 'span', 
			attributes : { 'class' :'list' }
		},
        { name : 'text with right img'   , element : 'p', attributes : { 'class' :'text_with_right_img' }},
        { name : 'img with left text'    , element : 'p', attributes : { 'class' :'img_with_left_text' }},
        { name : 'img with left text2'    , element : 'p', attributes : { 'class' :'img_with_left_text' }},
        { name : 'more'   , element : 'a', attributes : { 'class' :'more_arrow' }},
        { name : 'img border'   , element : 'img', attributes : { 'class' :'img_border' }},
        { 
			name : '50% white bg',
			element : 'div', 
			attributes : { 'class' :'white_50_percent_background' }
			},

        ];

};
