function getElementWidth(content, padding, border) {
    
    content = parseFloat(content);
    padding = parseFloat(padding);
    border = parseFloat(border);
      
   const boxSizing = content + (padding * 2) + (border * 2)
    
return boxSizing;
}
console.log(getElementWidth("50px", "8px", "4px"));// 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px"));// 200
  
    
    
    
    
    
    /**content = parseFloat(content);
    padding = parseFloat(padding);
    border = parseFloat(border);
      boxSizing = content + (padding*2)  + (border*2) ;

    /**const valuePadding =  parseInt(Number());
    //const valueBorder = (Number());
    const borderbox = Number(content) + (padding) + (border);
    
    return ` ${borderbox}`;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

//padding sağdan ve soldan ve border sağdan soldan
// */