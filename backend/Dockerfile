# Use OpenJDK as base image
FROM openjdk:17

# Set working directory
WORKDIR /app

# Copy and build the JAR file
COPY target/*.jar app.jar

# Expose API port
EXPOSE 8080

# Run the Spring Boot app
CMD ["java", "-jar", "app.jar"]
