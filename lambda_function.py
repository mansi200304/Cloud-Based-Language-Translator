import json
import boto3

def lambda_handler(event, context):
    translate = boto3.client('translate')
    
    source_text = event['text']
    target_language = event['target_language']
    
    response = translate.translate_text(
        Text=source_text,
        SourceLanguageCode='auto',
        TargetLanguageCode=target_language,
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps({
            'translated_text': response['TranslatedText']
        })
    }
