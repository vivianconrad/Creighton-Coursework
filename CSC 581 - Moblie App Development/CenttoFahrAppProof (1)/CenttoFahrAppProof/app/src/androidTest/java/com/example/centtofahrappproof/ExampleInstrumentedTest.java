package com.example.centtofahrappproof;

import android.content.Context;

import androidx.test.platform.app.InstrumentationRegistry;
import androidx.test.ext.junit.runners.AndroidJUnit4;

import org.junit.Test;
import org.junit.runner.RunWith;

import static org.junit.Assert.*;

/**
 * Instrumented test to verify the app's context.
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
@RunWith(AndroidJUnit4.class)
public class ExampleInstrumentedTest {

    /**
     * Test to ensure that the correct package name is obtained from the app context.
     */
    @Test
    public void verifyAppPackageName() {
        // Arrange: Obtain the context of the app under test.
        Context appContext = InstrumentationRegistry.getInstrumentation().getTargetContext();

        // Act: Get the package name from the app context.
        String packageName = appContext.getPackageName();

        // Assert: Verify that the package name matches the expected value.
        assertEquals("com.example.centtofahrappproof", packageName);
    }
}
