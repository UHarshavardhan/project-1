function openDeleteModal(id) {
    // Store the post ID in a variable
    var postId = id;

    // Display the delete confirmation modal
    document.getElementById('delete1').style.display = "block";

    // Set up the event listener for the "yes" button
    document.getElementById('yes').addEventListener('click', function () {
        // Call a function to delete the post
        deletePost(postId);

        // Hide the delete confirmation modal
        document.getElementById('delete1').style.display = "none";
    });

    // Set up the event listener for the "no" button
    document.getElementById('No').addEventListener('click', function () {
        // Hide the delete confirmation modal
        document.getElementById('delete1').style.display = "none";
    });
}

function deletePost(postId) {
    // Remove the post with the specified ID from the DOM
    var postElement = document.getElementById(postId);
    if (postElement) {
        postElement.parentNode.removeChild(postElement);
    }
}
