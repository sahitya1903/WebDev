FROM node

ENV MONGO_USERNAME=admin \
    MONGO_PWD=password

RUN mkdir -p delta/nodeapp

COPY . /delta/nodeapp

CMD [ "node", "/delta/nodeapp/server.js" ]