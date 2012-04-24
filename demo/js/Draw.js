;(function(){
  
  // --------- Component Interface Implementation ---------- //
  function Draw(){
    
  }
  
  Draw.prototype.create = function(data, config){
    var html = $("#tmpl-Draw").render({apps:demo.apps});
    return $(html);
  }
  
  Draw.prototype.postDisplay = function(){
    var c = this;
    
    brite.display("DrawToolbar",null,{parent:c.$element});

  }
  
  Draw.prototype.destroy = function(){
  }
  // --------- /Component Interface Implementation ---------- //
  
  
  // --------- Component Registration --------- //
  brite.registerComponent("Draw", null,
  function() {
    return new Draw();
  });
  // --------- Component Registration --------- //  
  
  
})();