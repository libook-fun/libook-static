OUPUTDIR=dist

default: build

build: clean
	npm install
	export NODE_ENV=production && export PUBLIC_PATH=//cdn.libook.fun/libook-static && npm run build
	scp -r -i ../onpremise/mengchen.pem ./$(OUPUTDIR)/* ubuntu@ec2-18-162-168-64.ap-east-1.compute.amazonaws.com:/home/ubuntu/onpremise/nginx/html/cdn/frontend/libook-static
	
clean:
	rm -rf $(OUPUTDIR)