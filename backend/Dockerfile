# Use an official Maven image to build the application
FROM maven:3.8.3-openjdk-17 AS build

# Set working directory
WORKDIR /app

# Copy the project files
COPY . .

# Build the application (skip tests for faster builds)
RUN mvn clean package -DskipTests

# Use a lightweight JDK runtime for running the application
FROM openjdk:17-jdk-slim

# Set working directory inside the new container
WORKDIR /app

# Copy the built JAR from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "app.jar"]
