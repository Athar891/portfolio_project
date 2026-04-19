#!/bin/bash

# Contact Form Testing Script
# This script helps verify your contact form backend is working correctly

echo "🧪 Contact Form Backend Testing"
echo "================================"
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "❌ .env.local not found!"
    echo "   Please copy .env.example to .env.local and configure it."
    echo ""
    echo "   Run: cp .env.example .env.local"
    exit 1
fi

echo "✅ .env.local found"
echo ""

# Test 1: Check environment variables
echo "📋 Test 1: Environment Variables"
echo "---------------------------------"

if grep -q "DEVELOPER_EMAIL=" .env.local; then
    DEVELOPER_EMAIL=$(grep "DEVELOPER_EMAIL=" .env.local | cut -d '=' -f 2)
    echo "✅ DEVELOPER_EMAIL: $DEVELOPER_EMAIL"
else
    echo "❌ DEVELOPER_EMAIL not set"
fi

if grep -q "EMAIL_PROVIDER=" .env.local; then
    EMAIL_PROVIDER=$(grep "EMAIL_PROVIDER=" .env.local | cut -d '=' -f 2)
    echo "✅ EMAIL_PROVIDER: $EMAIL_PROVIDER"
fi

echo ""

# Test 2: Check Node version
echo "📋 Test 2: Node.js Version"
echo "--------------------------"
node --version
npm --version
echo ""

# Test 3: API Endpoint Test
echo "📋 Test 3: Contact API Endpoint"
echo "-------------------------------"
echo ""
echo "Making test request to /api/contact..."
echo ""

# Create test payload
TEST_PAYLOAD='{
  "fullName": "Test User",
  "email": "test@example.com",
  "company": "Test Company",
  "message": "This is a test message from the contact form backend testing script."
}'

# Make the API call
RESPONSE=$(curl -s -X POST "http://localhost:3000/api/contact" \
  -H "Content-Type: application/json" \
  -d "$TEST_PAYLOAD")

echo "Response:"
echo "$RESPONSE" | jq . 2>/dev/null || echo "$RESPONSE"
echo ""

# Test 4: Rate Limiting Test
echo "📋 Test 4: Rate Limiting (attempting 6 rapid requests)"
echo "-----------------------------------------------------"
echo ""

SUCCESS_COUNT=0
FAILED_COUNT=0

for i in {1..6}; do
    RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "http://localhost:3000/api/contact" \
      -H "Content-Type: application/json" \
      -d "$TEST_PAYLOAD")

    HTTP_CODE=$(echo "$RESPONSE" | tail -n 1)

    if [ "$HTTP_CODE" = "200" ]; then
        SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
        echo "Request $i: ✅ Status $HTTP_CODE (Allowed)"
    elif [ "$HTTP_CODE" = "429" ]; then
        FAILED_COUNT=$((FAILED_COUNT + 1))
        echo "Request $i: 🛑 Status $HTTP_CODE (Rate Limited - Expected!)"
    else
        echo "Request $i: ⚠️  Status $HTTP_CODE"
    fi
done

echo ""
echo "Summary: $SUCCESS_COUNT allowed, $FAILED_COUNT rate limited"
echo ""

# Test 5: Validation Test
echo "📋 Test 5: Input Validation"
echo "---------------------------"
echo ""

# Test invalid email
echo "Testing invalid email..."
INVALID_EMAIL='{
  "fullName": "Test",
  "email": "not-an-email",
  "company": "Test",
  "message": "Test message"
}'

RESPONSE=$(curl -s -X POST "http://localhost:3000/api/contact" \
  -H "Content-Type: application/json" \
  -d "$INVALID_EMAIL")

if echo "$RESPONSE" | grep -q "Validation failed"; then
    echo "✅ Invalid email validation working"
else
    echo "❌ Invalid email validation may not be working"
fi

echo ""

# Test short message
echo "Testing message too short..."
SHORT_MSG='{
  "fullName": "Test",
  "email": "test@example.com",
  "company": "Test",
  "message": "Hi"
}'

RESPONSE=$(curl -s -X POST "http://localhost:3000/api/contact" \
  -H "Content-Type: application/json" \
  -d "$SHORT_MSG")

if echo "$RESPONSE" | grep -q "Validation failed"; then
    echo "✅ Message length validation working"
else
    echo "❌ Message length validation may not be working"
fi

echo ""
echo "================================"
echo "🎉 Testing Complete!"
echo ""
echo "Next steps:"
echo "1. Check your email for test messages"
echo "2. If no emails received, verify SMTP/Gmail credentials"
echo "3. Check server logs for any errors"
echo "4. Review CONTACT_FORM_SETUP.md for troubleshooting"
echo ""
