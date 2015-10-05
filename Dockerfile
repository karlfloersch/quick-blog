FROM node
MAINTAINER Karl Floersch

# Install CLI modules that we want
RUN npm install -g bower \
    grunt \
    mocha

# Start in bash
CMD ["bash"]
