from flask import Flask, jsonify
import yaml

app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    return jsonify("every thing works fine 200")


@app.route("/yml", methods=["GET"])
def get_data_from_yml():
    with open("conf.yaml", 'r') as f:
        valuesYaml = yaml.load(f, Loader=yaml.FullLoader)
    print(valuesYaml['username'])
    return jsonify(valuesYaml['username'])


if __name__ == "__main__":
    app.run()