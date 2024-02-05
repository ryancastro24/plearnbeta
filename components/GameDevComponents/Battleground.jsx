'use client'

import * as PIXI from 'pixi.js';
import { Stage, Container, Sprite,AnimatedSprite, Graphics  } from '@pixi/react';
import { useEffect,useState,useCallback} from 'react';





const spritesheet1 = "/spritesheets/luffyStandMove.json";
const luffyAttackSpriteSheet = "/spritesheets/luffyAttack.json";
const luffyHurtSpriteSheet = "/spritesheets/luffHurt.json";

const enemySpriteSheet = "/spritesheets/enemy.json";
const enemyAttackSpriteSheet = "/spritesheets/enemyAttack.json";
const enemyHurtSpriteSheet = "/spritesheets/enemyHurt.json";

const narutoIdleSpriteSheet = "/spritesheets/naruto_idle.json";
const narutoAttackSpriteSheet = "/spritesheets/naruto_attack.json";
const narutoHurtSpriteSheet = "/spritesheets/naruto_hurt.json";

const namiIdleSpriteSheet = "/spritesheets/nami_idle.json";
const namiAttackSpriteSheet = "/spritesheets/nami_attack.json";
const namiHurtSpriteSheet = "/spritesheets/nami_hurt.json";

const mashiritoIdleSpriteSheet = '/spritesheets/mashirito_idle.json';
const mashiritoHurtSpriteSheet = '/spritesheets/mashirito_hurt.json';
const mashiritoAttackSpriteSheet = '/spritesheets/mashirito_attack.json';

const caramelmanIdleSpriteSheet  = '/spritesheets/caramelman_idle.json';
const caramelmanHurtSpriteSheet  = '/spritesheets/caramelman_hurt.json';
const caramelmanAttackSpriteSheet  = '/spritesheets/caramelman_attack.json';

const friezaIdleSpriteSheet = '/spritesheets/frieza_idle.json';
const friezaHurtSpriteSheet = '/spritesheets/frieza_hurt.json';
const friezaAttackSpriteSheet = '/spritesheets/frieza_attack.json';









 const Battleground = ({isRight, lives,character,subjectTheme}) => {
  //luffy frames
  const [frames, setFrames] = useState([]);
  const [luffAttackFrames, setLuffyAttackFrames] = useState([]);
  const [luffyHurtFrames, setLuffyHurtFrames] = useState([]);


  //naruto frames
  const [narutoFrames,setNarutoFrames] = useState([]);
  const [narutoAttackFrames,setNarutoAttackFrames] = useState([]);
  const [narutoHurtFrames,setNarutoHurtFrames] = useState([]);


  //nami frames

  const [namiFrames,setNamiFrames] = useState([]);
  const [namiAttackFrames,setNamiAttackFrames] = useState([]);
  const [namiHurtFrames,setNamiHurtFrames] = useState([]);



  //enemy frames
  const [enemyFrames, setEnemyFrames] = useState([]);
  const [enemyAttackFrames, setEnemyAttackFrames] = useState([]);
  const [enemyHurtFrames, setEnemyHurtFrames] = useState([]);



  //mashirito frames
  const [mashiritoIdleFrames,setMashiritoIdleFrames] = useState([]);
  const [mashiritoHurtFrames,setMashiritoHurtFrames] = useState([]);
  const [mashiritoAttackFrames,setMashiritoAttackFrames] = useState([]);


  //caramelman frames
  const [caramelmanIdleFrames,setCaramelmanIdleFrames] = useState([]);
  const [caramelmanHurtFrames,setCaramelmanHurtFrames] = useState([]);
  const [caramelmanAttackFrames,setCaramelmanAttackFrames] = useState([]);


  //frieza frames
  const [friezaIdleFrames,setFriezaIdleFrames] = useState([]);
  const [friezaHurtFrames,setFriezaHurtFrames] = useState([]);
  const [friezaAttackFrames,setFriezaAttackFrames] = useState([]);




  const [heroLives,setHeroLives] = useState(lives);
  const [enemyLives,setEnemyLives] = useState(lives);
 



// Create a 5x5 grid of bunniesq
const livesGrid = () => {
  const grid = [];
  const hearttexture = PIXI.Texture.from('/spritesheets/heart.png');

  for (let i = 0; i < heroLives; i++) {
    const bunny = (
      <Sprite
        key={i}
        x={i * 25}
        texture={hearttexture}
      />
    );
    grid.push(bunny);
  }


  return grid;
}



const enemyLivesGrid = () => {
  const grid = [];
  const hearttexture = PIXI.Texture.from('/spritesheets/heart.png');

  for (let i = 0; i < enemyLives; i++) {
    const bunny = (
      <Sprite
        key={i}
        x={i * 25}
        texture={hearttexture}
      />
    );
    grid.push(bunny);
  }


  return grid;
}









  const draw = useCallback((g) => {
    g.clear();
    g.beginFill(0x000000);
    g.drawRect(0, 0,window.innerWidth, 300);
    g.endFill();
  });


  const loadSpritesheet = async () => {
    try {
      const resource = await PIXI.Assets.load(spritesheet1);
      const enemyResource = await PIXI.Assets.load(enemySpriteSheet);
      const enemyAttackResource = await PIXI.Assets.load(enemyAttackSpriteSheet);

      const enemyHurtResource = await PIXI.Assets.load(enemyHurtSpriteSheet);
      const luffyAttackResource = await PIXI.Assets.load(luffyAttackSpriteSheet);
      const luffyHurtResource = await PIXI.Assets.load(luffyHurtSpriteSheet);

      const narutoIdleResource = await PIXI.Assets.load(narutoIdleSpriteSheet);
      const narutoAttackResource = await PIXI.Assets.load(narutoAttackSpriteSheet);
      const narutoHurtResource = await PIXI.Assets.load(narutoHurtSpriteSheet);

      const namiIdleResource = await PIXI.Assets.load(namiIdleSpriteSheet);
      const namiAttackResource = await PIXI.Assets.load(namiAttackSpriteSheet);
      const namiHurtResource = await PIXI.Assets.load(namiHurtSpriteSheet);

      const mashiritoIdleResources = await PIXI.Assets.load(mashiritoIdleSpriteSheet);
      const mashiritoAttackResources = await PIXI.Assets.load(mashiritoHurtSpriteSheet);
      const mashiritoHurtResources = await PIXI.Assets.load(mashiritoAttackSpriteSheet);

      const caramelmanIdleResources = await PIXI.Assets.load(caramelmanIdleSpriteSheet);
      const caramelmanHurtResources = await PIXI.Assets.load(caramelmanHurtSpriteSheet);
      const caramelmanAttackResources = await PIXI.Assets.load(caramelmanAttackSpriteSheet);

      const  friezaIdleResources = await PIXI.Assets.load(friezaIdleSpriteSheet);
      const  friezaHurtResources = await PIXI.Assets.load(friezaHurtSpriteSheet);
      const  friezaAttackResources = await PIXI.Assets.load(friezaAttackSpriteSheet);

   
      
      setFrames(
        Object.keys(resource.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

      setLuffyAttackFrames(
        Object.keys(luffyAttackResource.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

      
      setLuffyHurtFrames(
        Object.keys(luffyHurtResource.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

      setEnemyFrames(
        Object.keys(enemyResource.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

      setEnemyAttackFrames(
        Object.keys(enemyAttackResource.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

       setEnemyHurtFrames(
        Object.keys(enemyHurtResource.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );


      setNarutoFrames(
        Object.keys(narutoIdleResource.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );
    
      
      
      setNarutoAttackFrames(
        Object.keys(narutoAttackResource.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

      setNarutoHurtFrames(
        Object.keys(narutoHurtResource.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );


      setNamiFrames(
        Object.keys(namiIdleResource.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

      setNamiAttackFrames(
        Object.keys(namiAttackResource.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

      
      setNamiHurtFrames(  
        Object.keys(namiHurtResource.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

      setMashiritoIdleFrames(
        Object.keys(mashiritoIdleResources.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

      
      setMashiritoHurtFrames(
        Object.keys(mashiritoHurtResources.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );
      
      setMashiritoAttackFrames(
        Object.keys(mashiritoAttackResources.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

      setCaramelmanIdleFrames(
        Object.keys(caramelmanIdleResources.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

      setCaramelmanHurtFrames(
        Object.keys(caramelmanHurtResources.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );

      setCaramelmanAttackFrames(
        Object.keys(caramelmanAttackResources.data.frames).map(frame =>
          PIXI.Texture.from(frame)
        )
      );


     setFriezaIdleFrames(
        Object.keys(friezaIdleResources.data.frames).map(frame =>
        PIXI.Texture.from(frame)
         )
     );

     setFriezaHurtFrames(
      Object.keys(friezaHurtResources.data.frames).map(frame =>
      PIXI.Texture.from(frame)
     )
   );

   setFriezaAttackFrames(
    Object.keys(friezaAttackResources.data.frames).map(frame =>
    PIXI.Texture.from(frame)
    )
 );


  


    } catch (error) {
      console.error('Error loading spritesheet:', error);
    }
  };

  useEffect(() => {
    
    loadSpritesheet();

   
 
  },[]);

  useEffect(() => {
  
    if(isRight === false){
      setHeroLives(heroLives - 1);
    }
    if(isRight === true){
      setEnemyLives(enemyLives - 1)
    }
   
 
  }, [isRight]);


  if (frames.length === 0) {
    return null;
  }

  const forestBackground = PIXI.Texture.from("/GameDevAssets/forest.png");
  const seaBackground =  PIXI.Texture.from("/GameDevAssets/sea.jpg");
  const snowBackground =  PIXI.Texture.from("/GameDevAssets/snow.jpg");
  const desertBackground =  PIXI.Texture.from("/GameDevAssets/desert.jpg");
  const cityBackground =  PIXI.Texture.from("/GameDevAssets/city.jpg");


  const vs = PIXI.Texture.from("/spritesheets/vs.png");
  const luffyProfile = PIXI.Texture.from("/spritesheets/luffyProfile.png");
  return (
    <Stage width={window.innerWidth} height={300} style={{backgroundColor:"white"}}>
  
    <Sprite texture={
      subjectTheme === "sea" ? seaBackground :
      subjectTheme === "snow" ? snowBackground: 
      subjectTheme === "city" ? cityBackground:
      subjectTheme === "desert" ? desertBackground : forestBackground
    } width={window.innerWidth} height={300} /> 
    
    <Graphics draw={draw} alpha={0.7}/>

        <Sprite texture={luffyProfile} width={60} height={60} x={150} y={40} anchor={0.5}/>
        <Container x={190} y={30}>
            {livesGrid()}
        </Container>


        <Container x={isRight ? window.innerWidth - 700 : 200} y={80} >
          
         <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}
            textures={
              character === 'luffy' ? frames : character  === "naruto" ?  narutoFrames : namiFrames
            }
            scale={{ x: 4, y: 4 }}
            tint={isRight == false ? 0xFF0000 : 0xFFFFFF}
            alpha={isRight ? 0 : isRight  === false ? 0 : 1}
        />

          <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}
            textures={character === 'luffy' ? luffAttackFrames : character  === "naruto" ?  narutoAttackFrames : namiAttackFrames}
            scale={{ x: 4, y: 4 }}
            alpha={isRight ? 1 : 0}
        />
           <AnimatedSprite
            animationSpeed={0.05}
            isPlaying={true}
            textures={character === 'luffy' ? luffyHurtFrames : character  === "naruto" ?  narutoHurtFrames : namiHurtFrames}
            scale={{ x: 4, y: 4 }}
            alpha={isRight === false ? 1 : 0}
        />
        </Container>
        <Sprite texture={vs} x={window.innerWidth / 2} anchor={0.5} scale={0.2} y={60}/> 

        <Container x={window.innerWidth - 200} y={30} >
              {enemyLivesGrid()}
        </Container>
        
        <Container x={isRight === false ? 600 : window.innerWidth - 200} y={50} >
         
         <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}
            textures={
              subjectTheme === "sea" ? caramelmanIdleFrames :
              subjectTheme === "snow" ? friezaIdleFrames : 
              subjectTheme === "city" ? mashiritoIdleFrames : enemyFrames
              
            }
            scale={{ x: -4, y: 4 }}
            alpha={isRight ? 0 : isRight  === false ? 0 : 1}
        />
        </Container>

           


        <Container x={isRight === false ? 600 : window.innerWidth - 200} y={50} >
         
         <AnimatedSprite
            animationSpeed={0.05}
            isPlaying={true}pm 
            textures={
              subjectTheme === "sea" ? caramelmanHurtFrames :
              subjectTheme === "snow" ? friezaHurtFrames : 
              subjectTheme === "city" ? mashiritoHurtFrames : enemyHurtFrames
              
            }
            scale={{ x: -4, y: 4 }}
            alpha={isRight ? 1 : 0}
        />
        </Container>

      

        
        <Container x={isRight === false ? 600 : window.innerWidth - 300} y={50} >
         
         
         <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}a
            textures={
              subjectTheme === "sea" ? caramelmanAttackFrames :
              subjectTheme === "snow" ? friezaAttackFrames : 
              subjectTheme === "city" ? mashiritoAttackFrames : enemyAttackFrames
               
            }
            scale={{ x: -4, y: 4 }}
            alpha={isRight == false ? 1 : 0}
        />
        </Container>
   
    </Stage>
  );
};




export default Battleground;