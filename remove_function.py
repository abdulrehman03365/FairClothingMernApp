import re

def filter_file(blob, callback):
    contents = blob.data.decode('utf-8')
    # Remove the declaration of the function using regular expressions
    modified_contents = re.sub(r'async function populatingApis\(\)[\s\S]+?(?=\n})', '', contents)
    if modified_contents != contents:
        callback(modified_contents.encode('utf-8'))
