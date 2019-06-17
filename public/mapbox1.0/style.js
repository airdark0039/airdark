const gpmToken = '85739ed35d661945cc9e112433b8e8df'
const TDTHEADER = 'http://t0.tianditu.gov.cn'

const STYLE = {
    "version": 8,
    "name": "Mapbox Streets",
    "sources": {
        vecTiles: {
            type: "raster",
            tiles: [
              TDTHEADER +
              "/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=" + gpmToken
            ],
            tileSize: 256
        },
        //这个是影像
        "tdtTiles": {
            type: "raster",
            tiles: [
                TDTHEADER +
                "/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=" + gpmToken
            ],
            tileSize: 256
        },
        //这个是地形
        terTiles: {
            type: "raster",
            tiles: [
                TDTHEADER +
                "/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=" + gpmToken
            ],
            tileSize: 256
        },
        mapzj: {
            type: "raster",
            tiles: [
                "http://t0.tianditu.gov.cn" +
                "/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=" + gpmToken
            ],
            tileSize: 256
        },
    },
    "layers": [{
        id: "annotation",
        type: "raster",
        source: 'mapzj',
    }]
}
const layerVec = {
    id: "vec",
    type: "raster",
    source: "vecTiles",
    minzoom: 1,
    maxzoom: 18
  };
const layerTer = {  //地形
    id: "ter",
    type: "raster",
    source: "terTiles",
    minzoom: 1,
    maxzoom: 14,
    "layout": {
    //   "visibility": "none"
    },
  };
const layerImg = {  //影像
    id: "img",
    type: "raster",
    source: "tdtTiles",
    minzoom: 1,
    maxzoom: 18,
    "layout": {
    //   "visibility": "none"
    },
  };