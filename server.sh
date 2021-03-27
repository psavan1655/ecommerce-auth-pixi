# Export Required Environment Variables
export REACT_APP_API_URL='http://localhost:3000/'


cd pod_admin_panel/ && npm install && npm run build
cd ..

cd pod_website/ && npm install && npm run build
cd ..

cd backend
npm install
echo "Installation complete. Server is starting..."
npm start

