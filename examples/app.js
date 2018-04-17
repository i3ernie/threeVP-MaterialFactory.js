/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['three', "cmd", 'Viewport', 'lights/Sunlight', 'factorys/MaterialFactory', 
    'json!data/materials/macrocom/def_mat.json'], 
function( THREE, CMD, Viewport, Sunlight, MaterialFactory, def_materials ){
    
    return {
        init : function(){
            this.VP = new Viewport( );  
        },
        
        start : function(){
            var VP = this.VP;
            
            console.log( def_materials );
            
            var sun = new Sunlight();
            sun.position.set(10,10,10);
            
            var matFactory = new MaterialFactory( def_materials, {texturePath : "textures/"} );
            
            var mat1 = matFactory.getMaterial("front_Folie_1");
            var mat2 = matFactory.getMaterial("front_Folie_2");
            var mesh1 = new THREE.Mesh( new THREE.BoxGeometry(1, 1, 1), mat1 );
            mesh1.position.set(2, 2, 0);
            
            VP.scene.add( mesh1 );
            VP.scene.add( new THREE.Mesh( new THREE.BoxGeometry(1, 1, 1), mat2 ) ); 
            
            VP.scene.add( sun );
            VP.camera.position.z = 10;
            
            hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
            
            hemiLight.position.set( 0, 50, 0 );
            VP.scene.add( hemiLight );
            
            VP.start();

        }
    };
        
});
