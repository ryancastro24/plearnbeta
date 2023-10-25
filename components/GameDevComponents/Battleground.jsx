'use client'

import * as PIXI from 'pixi.js';
import { Stage, Container, Sprite, Text,AnimatedSprite, Graphics  } from '@pixi/react';
import { useMemo } from 'react';
import { useEffect,useState,useCallback} from 'react';






const spritesheet1 = "/spritesheets/luffyStandMove.json";
const luffyAttackSpriteSheet = "/spritesheets/luffyAttack.json";
const luffyHurtSpriteSheet = "/spritesheets/luffHurt.json";
const enemySpriteSheet = "/spritesheets/enemy.json";
const enemyAttackSpriteSheet = "/spritesheets/enemyAttack.json";
const enemyHurtSpriteSheet = "/spritesheets/enemyHurt.json";

const backgroundImage = '/spritesheets/backgroundsample.png'

 const Battleground = ({isRight, lives}) => {
  //luffy frames
  const [frames, setFrames] = useState([]);
  const [luffAttackFrames, setLuffyAttackFrames] = useState([]);
  const [luffyHurtFrames, setLuffyHurtFrames] = useState([]);

  //enemy frames
  const [enemyFrames, setEnemyFrames] = useState([]);
  const [enemyAttackFrames, setEnemyAttackFrames] = useState([]);
  const [enemyHurtFrames, setEnemyHurtFrames] = useState([]);



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
    } catch (error) {
      console.error('Error loading spritesheet:', error);
    }
  };

  useEffect(() => {
    loadSpritesheet();
  }, []);


  if (frames.length === 0) {
    return null;
  }

  const backgroundTexture = PIXI.Texture.from("/spritesheets/backgroundsample.png");
  const vs = PIXI.Texture.from("/spritesheets/vs.png");
  return (
    <Stage width={window.innerWidth} height={300} style={{backgroundColor:"white"}}>
   
    <Sprite texture={backgroundTexture} width={window.innerWidth} height={300} /> 
    
    <Graphics draw={draw} alpha={0.7}/>
        <Container x={isRight ? window.innerWidth - 700 : 200} y={80} >
         <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}
            textures={frames}
            scale={{ x: 4, y: 4 }}
            tint={isRight == false ? 0xFF0000 : 0xFFFFFF}
            alpha={isRight ? 0 : isRight  === false ? 0 : 1}
        />

          <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}
            textures={luffAttackFrames}
            scale={{ x: 4, y: 4 }}
            alpha={isRight ? 1 : 0}
        />
           <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}
            textures={luffyHurtFrames}
            scale={{ x: 4, y: 4 }}
            alpha={isRight === false ? 1 : 0}
        />
        </Container>
        <Sprite texture={vs} x={window.innerWidth / 2} anchor={0.5} scale={0.2} y={60}/> 

        <Container x={isRight === false ? 600 : window.innerWidth - 200} y={50} >
         
         <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}
            textures={enemyFrames}
            scale={{ x: -4, y: 4 }}
            alpha={isRight ? 0 : isRight  === false ? 0 : 1}
        />
        </Container>

           


        <Container x={isRight === false ? 600 : window.innerWidth - 200} y={50} >
         
         <AnimatedSprite
            animationSpeed={0.05}
            isPlaying={true}
            textures={enemyHurtFrames}
            scale={{ x: -4, y: 4 }}
            alpha={isRight ? 1 : 0}
        />
        </Container>

      

        
        <Container x={isRight === false ? 600 : window.innerWidth - 300} y={50} >
         
         
         <AnimatedSprite
            animationSpeed={0.1}
            isPlaying={true}
            textures={enemyAttackFrames}
            scale={{ x: -4, y: 4 }}
            alpha={isRight == false ? 1 : 0}
        />
        </Container>
   
    </Stage>
  );
};




export default Battleground;