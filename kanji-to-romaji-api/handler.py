import json
import pykakasi

def kanji_to_romaji(event, context):
    kakasi = pykakasi.kakasi()

    kakasi.setMode('H', 'a') # ひらがなをローマ字に変換するように設定
    kakasi.setMode('K', 'a') # カタカナをローマ字に変換するように設定
    kakasi.setMode('J', 'a') # 漢字をローマ字に変換するように設定

    conversion = kakasi.getConverter()

    response = {
        "statusCode": 200,
        'headers': {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
        },
        "body": conversion.do(event['body'])
    }

    return response
