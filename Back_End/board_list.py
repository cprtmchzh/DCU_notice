import urllib.request
from flask_cors import CORS
from bs4 import BeautifulSoup
from flask import Flask, jsonify, request, Response
import json

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

# CORS 정책 강화
CORS(app, resources={r"/*": {"origins": "*"}})

# User-Agent 설정
HEADERS = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.177 Mobile Safari/537.36"
}

@app.route("/notice", methods=["GET"])
def notice():
    url = request.args.get("url")

    # HTTPS 체크
    if not url.startswith("https://"):
        return jsonify({"error": "Only HTTPS requests are allowed"}), 400

    try:
        # 요청 보내기
        req = urllib.request.Request(url, headers=HEADERS)
        sourcecode = urllib.request.urlopen(req).read()
        soup = BeautifulSoup(sourcecode, "html.parser")

        notice_list = []
        board_list = soup.select("#main_contents > div.layout > div > div > div.board_list > table > tbody > tr")
        
        for board in board_list:
            title = board.find("a")
            if title:
                type = "공지" if title.find(class_="notice") else board.select_one("td:nth-child(1)").text
                name = title.text.strip()
                writer = board.find(class_="writer").next_element.text
                date = board.select_one("td:nth-child(5)").text
                hyperlink = "https://www.cu.ac.kr" + title.attrs['href']
                
                notice_list.append({"type": type, "name": name, "writer": writer, "date": date, "hyperlink": hyperlink})

        # JSON 응답 명확하게 설정
        return Response(json.dumps(notice_list), mimetype='application/json; charset=utf-8')

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
