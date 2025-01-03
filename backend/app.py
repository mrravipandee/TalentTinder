from flask import Flask, request, jsonify
from flask_cors import CORS
import jobs  # Import the jobs.py file
from typing import List, Optional

app = Flask(__name__)
CORS(app)

df = jobs.df

@app.route('/')
def home() -> str:
    return "Welcome to the Job Filter API!"

@app.route('/filter-jobs', methods=['POST'])
def filter_jobs() -> jsonify:
    data = request.get_json()
    skills: List[str] = data.get('skills', [])
    experience: Optional[str] = data.get('experience', None)
    location: Optional[str] = data.get('location', None)
    page: int = int(data.get('page', 1))
    page_size: int = int(data.get('page_size', 10))

    if not skills:
        return jsonify({'error': 'No skills provided'}), 400

    filtered_jobs = jobs.filter_jobs_by_skills(df, skills, experience, location)

    start = (page - 1) * page_size
    end = start + page_size
    paginated_jobs = filtered_jobs.iloc[start:end]

    return jsonify(paginated_jobs.to_dict(orient='records'))


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
