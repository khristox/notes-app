@echo off

echo ==============================
echo Generating Drizzle migration
echo ==============================

call npx drizzle-kit generate

if errorlevel 1 (
    echo Migration generation failed.
    exit /b 1
)

echo ==============================
echo Applying database migration
echo ==============================

call npx drizzle-kit migrate

if errorlevel 1 (
    echo Database migration failed.
    exit /b 1
)

echo ==============================
echo Database migration completed
echo ==============================

# Run this to confirm
#call npx drizzle-kit studio
