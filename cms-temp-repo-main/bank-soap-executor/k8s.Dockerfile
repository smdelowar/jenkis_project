FROM eclipse-temurin:19-jre-alpine
RUN apk update
RUN apk add telnet -y
#ADD target/bank-soap-executor-0.0.1.jar bank-soap-executor-0.0.1.jar
ADD ./bank-soap-executor/bank-soap-executor-0.0.1.jar bank-soap-executor-0.0.1.jar
EXPOSE 7326

ENTRYPOINT ["java","-Dspring.profiles.active=ific-uat","--enable-preview","-Xmx300m","-jar","bank-soap-executor-0.0.1.jar"]
