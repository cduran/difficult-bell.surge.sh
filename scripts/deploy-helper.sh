#!/bin/bash

# Surge.sh Deployment Helper Script
# This script helps you set up and manage deployments

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔔 Difficult Bell - Deployment Helper${NC}"
echo "========================================"

# Function to check if surge is installed
check_surge() {
    if ! command -v surge &> /dev/null; then
        echo -e "${YELLOW}⚠️  Surge CLI not found. Installing...${NC}"
        npm install -g surge
    else
        echo -e "${GREEN}✅ Surge CLI is installed${NC}"
    fi
}

# Function to login to surge
surge_login() {
    echo -e "${BLUE}📧 Logging into Surge.sh...${NC}"
    surge login
}

# Function to get surge token
get_token() {
    echo -e "${BLUE}🔑 Getting your Surge token...${NC}"
    echo -e "${YELLOW}Copy this token to your GitHub repository secrets as 'SURGE_TOKEN':${NC}"
    echo ""
    surge token
    echo ""
    echo -e "${YELLOW}To add this to GitHub:${NC}"
    echo "1. Go to your repository on GitHub"
    echo "2. Navigate to Settings → Secrets and variables → Actions"
    echo "3. Click 'New repository secret'"
    echo "4. Name: SURGE_TOKEN"
    echo "5. Value: (paste the token above)"
    echo "6. Click 'Add secret'"
}

# Function to deploy locally
deploy_local() {
    echo -e "${BLUE}🏗️  Building project...${NC}"
    npm run build
    
    echo -e "${BLUE}🚀 Deploying to Surge.sh...${NC}"
    surge dist/ difficult-bell.surge.sh
    
    echo -e "${GREEN}✅ Deployment completed!${NC}"
    echo -e "${GREEN}🌐 Site URL: https://difficult-bell.surge.sh${NC}"
}

# Function to show status
show_status() {
    echo -e "${BLUE}📊 Deployment Status${NC}"
    echo "====================="
    echo "Production: https://difficult-bell.surge.sh"
    echo "Staging: https://staging-difficult-bell.surge.sh"
    echo ""
    echo "To check if sites are live:"
    echo "curl -I https://difficult-bell.surge.sh"
}

# Main menu
echo ""
echo "What would you like to do?"
echo "1. Check/Install Surge CLI"
echo "2. Login to Surge.sh"
echo "3. Get Surge token for GitHub Actions"
echo "4. Deploy locally"
echo "5. Show deployment status"
echo "6. Exit"
echo ""

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        check_surge
        ;;
    2)
        surge_login
        ;;
    3)
        get_token
        ;;
    4)
        deploy_local
        ;;
    5)
        show_status
        ;;
    6)
        echo -e "${GREEN}👋 Goodbye!${NC}"
        exit 0
        ;;
    *)
        echo -e "${RED}❌ Invalid choice. Please run the script again.${NC}"
        exit 1
        ;;
esac

echo ""
echo -e "${GREEN}✨ Done! Happy deploying! 🚀${NC}"
