function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result=[];
	for(var i=0;i<collection_a.length;i++){	
		for(var j=0;j<collection_b.length;j++){		
			if(collection_b[j]==collection_a[i]){
				result.push(collection_a[i]);
			}
		}
	}
 //  	collection_a.sort();	
	// collection_b.sort();

	// var ai=0, bi=0;
 //    var result = [];
 //    while ( ai < collection_a.length && bi < collection_b.length )
 //    {
 //        if      ( collection_a[ai] < collection_b[bi] ) { ai++; }
 //        else if ( collection_a[ai] > collection_b[bi] ) { bi++; }
 //        else  
 //        {
 //            result.push ( collection_a[ai] );
 //            ai++;
 //            bi++;
 //        }
 //    }
    return result;
}

module.exports = collect_same_elements;
