//19.Action
//actionを返す関数=action creater
//componentで使用するのでexportする
//viewを担当するcomponentでimportしてイベントを掴んだときに適切な状態遷移を行う

//reducerでも使うのでインポートして使えるようにする
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = ()=>({
        type:　INCREMENT
})

export const decrement = ()=>({
        type:　DECREMENT
})
