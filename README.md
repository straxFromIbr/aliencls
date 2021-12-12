# DWエイリアン分類
- ガバガバ精度で画像分類しちゃいます。
- MovileNetV2ベースで出力層のみ学習。HPチューニング等はしてないです。

## ファイル構成
- `/models`: 学習済みモデル
    - `model.h5` : 保存した学習済みモデル。HDF5形式
    - `tfjsmodel_h5/`
        - tfjs_converterで上記モデルをTensorFlowJS形式に変換したモデル
- `/trainmodel.ipynb`
    - データセット構築→モデルの学習、検証のためのIPythonノートブック    
- `/docs`
    - GitHubPages用


## ラベルとクラス名対応表
|ラベル|         名前|
|-----:|------------:|
|     0|     cyberman|
|     1|        dalek|
|     2|           k9|
|     3|          ood|
|     4|     slitheen|
|     5|weeping_angel|
|     6|        zygon|
